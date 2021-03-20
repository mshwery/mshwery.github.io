import * as React from 'react'
import classnames from 'clsx'
import convertUnits from 'convert-units'
import Card from './Card'
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

const BrewRatioCalculator: React.FC = () => {
  const ratios = ['1:15', '1:16', '1:17', '1:18']
  const [beanUnit, setBeanUnit] = React.useState<BeanUnit>('g')
  const [waterUnit, setWaterUnit] = React.useState<WaterUnit>('g')
  const [beanAmount, setBeanAmount] = React.useState<number>(30)
  const [waterAmount, setWaterAmount] = React.useState<number>(500)
  const [selectedRatio, setRatio] = React.useState(ratios[2])

  const updateWater = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const [_, ratio] = selectedRatio.split(':')
    const amount = Number(event.target.value)
    const gramsOfWater = convert(amount, waterUnit, 'g', 'water')
    const gramsOfBeans = Math.round(gramsOfWater / Number(ratio))
    const beans = convert(gramsOfBeans, 'g', beanUnit, 'beans')
    setWaterAmount(amount)
    setBeanAmount(beans)
  }, [selectedRatio, beanUnit, waterUnit])

  const updateBeans = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const [_, ratio] = selectedRatio.split(':')
    const amount = Number(event.target.value)
    const gramsOfBeans = convert(amount, beanUnit, 'g', 'beans')
    const gramsOfWater = Math.round(gramsOfBeans * Number(ratio))
    const water = convert(gramsOfWater, 'g', waterUnit, 'water')
    setBeanAmount(amount)
    setWaterAmount(water)
  }, [selectedRatio, beanUnit, waterUnit])

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

  const updateRatio = React.useCallback((newRatio: string) => {
    setRatio(newRatio)
    const [_, ratio] = newRatio.split(':')
    const gramsOfBeans = convert(beanAmount, beanUnit, 'g', 'beans')
    const gramsOfWater = Math.round(gramsOfBeans * Number(ratio))
    const water = convert(gramsOfWater, 'g', waterUnit, 'water')
    setWaterAmount(water)
  }, [beanAmount, beanUnit, waterUnit])

  return (
    <Card className={styles.calculator}>
      <div className={classnames(styles.section, styles.ratio)}>
        <label className={classnames(styles.label, styles.inline)}>Ratio</label>
        <div className={classnames(styles.inputContainer, styles.inline, styles.pills)}>
          {ratios.map(ratio => (
            <button type="button" key={ratio} className={classnames(styles.pill, { [styles.selected]: ratio === selectedRatio})} onClick={() => updateRatio(ratio)}>
              {ratio}
            </button>
          ))}
        </div>
      </div>
      
      <div className={styles.section}>
        <label className={styles.label}>Beans</label>
        <div className={styles.inputContainer}>
          <input className={styles.numberInput} type="number" pattern="[0-9]*" min={1} value={beanAmount ? Number(beanAmount.toFixed(2)) : undefined} onChange={updateBeans} />
          <button type="button" className={styles.unitSpinner} onClick={cycleBeanUnit}>{unitMap[beanUnit]}</button>
        </div>
      </div>

      <div className={styles.section}>
        <label className={styles.label}>Water</label>
        <div className={styles.inputContainer}>
          <input className={styles.numberInput} type="number" pattern="[0-9]*" min={1} value={waterAmount ? Number(waterAmount.toFixed(2)) : undefined} onChange={updateWater} />
          <button type="button" className={styles.unitSpinner} onClick={cycleWaterUnit}>{unitMap[waterUnit]}</button>
        </div>
        {waterUnit === 'cup' && (
          <p className={styles.subText}>
            <small>* standard 8 fl oz cups, unlike some coffee machines</small>
          </p>
        )}
      </div>
    </Card>
  )
}

export default BrewRatioCalculator