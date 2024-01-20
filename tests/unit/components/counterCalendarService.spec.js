import { ref } from "vue"
import {useCounterCalendarService} from '../../../src/components/counter/CounterCalendar/CounterCalendarService.ts'
import {testCounter} from '../../util/testData.ts'
import { DateTime } from "luxon"
import { expect } from "vitest"

const TEST_DATE_YEAR = 2024
const TEST_DATE_MONTH = 11
const TEST_DATE_DAY = 12

const setup = () => {
    const counter = testCounter
    const currentDate = ref(DateTime.fromObject({year: TEST_DATE_YEAR, month: TEST_DATE_MONTH, day: TEST_DATE_DAY}))

    const {currentDateString, calendarOptions } = useCounterCalendarService(counter, currentDate, () => {})

    return {currentDateString, calendarOptions}
}

describe('counterCalendarService.ts', () => {
    it('can format dates correctly', () => {
        const {currentDateString} = setup()
        expect(currentDateString.value).toEqual(`${TEST_DATE_YEAR}-${TEST_DATE_MONTH}-${TEST_DATE_DAY}`)
    })
    it('generates calendar options', () => {
        const {calendarOptions} = setup()
        expect(calendarOptions.value).to.deep.equal([
            {
                date: '2024-01-01',
                textColor: 'white',
                backgroundColor: 'green'
            },
            {
                date: '2024-01-02',
                textColor: 'white',
                backgroundColor: 'red'
            },
            {
                date: '2024-01-03',
                textColor: 'white',
                backgroundColor: 'green'
            },
        ])
    })
})