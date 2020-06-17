import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')

beforeEach(() => {
    jest.clearAllMocks()
})

describe('MessageDisplay', () => {
    it('Calls getMessage and displays message', async () => {
        // mock the API call
        const mockMsg = "Hello from the db!"
        getMessage.mockResolvedValueOnce({ text: mockMsg })

        const wrapper = mount(MessageDisplay)
        // wait for promise to resolve
        await flushPromises()
        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)
        // check that component displays message
        const msg = wrapper.find('[data-testid="message"]').element.textContent
        expect(msg).toEqual(mockMsg)
    })

    it('Displays an error when getMessage call fails', async () => {
        // mock the failed API call
        const mockError = "Oops! Something went wrong."
        getMessage.mockRejectedValueOnce({ text: mockError })

        const wrapper = mount(MessageDisplay)
        // wait for promise to resolve
        await flushPromises()
        // check that call happened once
        expect(getMessage).toHaveBeenCalledTimes(1)
        // check that component displays error
        const error = wrapper.find('[data-testid="message-error"]').element.textContent
        expect(error).toEqual(mockError)
    })
})