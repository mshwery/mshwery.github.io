import React from 'react'
import Head from 'next/head'
import convertUnits from 'convert-units'
import styles from '../styles/BrewRatio.module.css'

type Unit = 'g' | 'Tbs' | 'oz' | 'fl-oz' | 'cup'
type BeanUnit = Exclude<Unit, 'fl-oz' | 'cup'>
type WaterUnit = Exclude<Unit, 'Tbs' | 'oz'>

const beanUnits: Array<BeanUnit> = ['g', 'Tbs', 'oz']
const waterUnits: Array<WaterUnit> = ['g', 'fl-oz', 'cup']

const unitMap: Record<Unit, string> = {
  'g': 'g',
  'Tbs': 'tbsp',
  'oz': 'oz',
  'cup': 'cups',
  'fl-oz': 'fl oz'
}

function getNextUnit<T extends Unit>(array: T[], currentItem: T): T {
  const nextIndex = array.findIndex(unit => unit === currentItem) + 1
  const maxIndex = array.length - 1
  const index = nextIndex > maxIndex ? 0 : nextIndex
  return array[index]
}

const massUnits = convertUnits().possibilities('mass')

/**
 * Convert an amount from one unit to another.
 * Handles rough conversion from mass to volume and back, based on the `type`
 */
function convert(amount: number, from: Unit, to: Unit, type: 'water' | 'beans') {
  let newAmount = convertUnits(amount).from(from)
  if (newAmount.possibilities().includes(to)) {
    return newAmount.to(to)
  }

  const fromMass = massUnits.includes(from)
  let anchorUnit: Parameters<ReturnType<typeof convertUnits>['to']>[0]
  let anchor: number

  if (type === 'water') {
    // water is roughly 1 gram to 1 ml
    anchor = newAmount.to(fromMass ? 'g' : 'ml')
    anchorUnit = fromMass ? 'ml' : 'g'
  } else {
    // coffee is roughly 4-7 grams per Tbs, so let's assume 5 for simplicity
    anchor = newAmount.to(fromMass ? 'g' : 'Tbs')
    anchor = fromMass ? anchor / 5 : anchor * 5
    anchorUnit = fromMass ? 'Tbs' : 'g'
  }

  return convertUnits(anchor).from(anchorUnit).to(to)
}

// function toGrams(amount: number, fromUnit: Unit, type: 'water' | 'beans') {
//   if (massUnits.includes(fromUnit)) {
//     return convertUnits(amount).from(fromUnit).to('g')
//   }

//   if (type === 'water') {
//     // water is roughly 1 gram to 1 ml
//     return convertUnits(amount).from(fromUnit).to('ml')
//   }

//   // coffee is roughly 4-7 grams per Tbs, so let's assume 5 for simplicity
//   return convertUnits(amount).from(fromUnit).to('Tbs') * 5
// }

// function fromGrams(amount: number, toUnit: Unit, type: 'water' | 'beans') {
//   if (massUnits.includes(toUnit)) {
//     return convertUnits(amount).from('g').to(toUnit)
//   }

//   if (type === 'water') {
//     // water is roughly 1 gram to 1 ml
//     return convertUnits(amount).from('ml').to(toUnit)
//   }

//   // coffee is roughly 4-7 grams per Tbs, so let's assume 5 for simplicity
//   return convertUnits(amount / 5).from('Tbs').to(toUnit)
// }

function BrewRatio() {
  const [beanUnit, setBeanUnit] = React.useState<BeanUnit>('g')
  const [waterUnit, setWaterUnit] = React.useState<WaterUnit>('g')
  const [beanAmount, setBeanAmount] = React.useState<number>(30)
  const [waterAmount, setWaterAmount] = React.useState<number>(500)

  const updateWater = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(event.target.value)
    const gramsOfWater = convert(amount, waterUnit, 'g', 'water')
    const gramsOfBeans = Math.round(gramsOfWater / 17)
    const beans = convert(gramsOfBeans, 'g', beanUnit, 'beans')
    setWaterAmount(amount)
    setBeanAmount(beans)
  }, [beanUnit, waterUnit])

  const updateBeans = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = Number(event.target.value)
    const gramsOfBeans = convert(amount, beanUnit, 'g', 'beans')
    const gramsOfWater = Math.round(gramsOfBeans * 17)
    const water = convert(gramsOfWater, 'g', waterUnit, 'water')
    setBeanAmount(amount)
    setWaterAmount(water)
  }, [beanUnit, waterUnit])

  const cycleBeanUnit = React.useCallback(() => {
    const unit = getNextUnit(beanUnits, beanUnit)
    const amount = convert(beanAmount, beanUnit, unit, 'beans')
    setBeanUnit(unit)
    setBeanAmount(amount)
  }, [beanAmount, beanUnit])

  const cycleWaterUnit = React.useCallback(() => {
    const unit = getNextUnit(waterUnits, waterUnit)
    const amount = convert(waterAmount, waterUnit, unit, 'water')
    setWaterUnit(unit)
    setWaterAmount(amount)
  }, [waterAmount, waterUnit])

  return (
    <>
      <Head>
        <title>Brew Ratio</title>
        <link rel="icon" href="/brew-ratio/favicon.ico" key="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/brew-ratio/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/brew-ratio/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/brew-ratio/favicon-16x16.png" />
        <link rel="manifest" href="/brew-ratio/site.webmanifest" />
        <link rel="mask-icon" href="/brew-ratio/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={styles.page}>
        <div className={styles.pageIntro}>
          <h1 className={styles.pageTitle}>
            Brew Ratio
          </h1>
          <p className={styles.description}>
            Calculate the beans or water you need to make a good cup of coffee.
          </p>
        </div>
        <div className={styles.calculator}>
          <div className={styles.unit}>
            <label className={styles.label}>Beans</label>
            <div className={styles.inputContainer}>
              <input className={styles.numberInput} type="number" min={1} value={Number(beanAmount.toFixed(2))} onChange={updateBeans} />
              <button type="button" className={styles.unitSpinner} onClick={cycleBeanUnit}>{unitMap[beanUnit]}</button>
            </div>
          </div>

          <div className={styles.unit}>
            <label className={styles.label}>Water</label>
            <div className={styles.inputContainer}>
              <input className={styles.numberInput} type="number" min={1} value={Number(waterAmount.toFixed(2))} onChange={updateWater} />
              <button type="button" className={styles.unitSpinner} onClick={cycleWaterUnit}>{unitMap[waterUnit]}</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default BrewRatio