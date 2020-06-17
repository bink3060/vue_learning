import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

describe('AppHeader', () => {
    test('If user is not loggedin, do not show logout button', () => {
        const wrapper = mount(AppHeader)
        expect(wrapper.find('[data-testid="btn-logout"]').isVisible()).toBe(false)
    })

    test('If user is  loggedin, show logout button', async () => {
        const wrapper = mount(AppHeader)
        wrapper.setData({ loggedIn: true })

        await wrapper.vm.$nextTick()
        expect(wrapper.find('[data-testid="btn-logout"]').isVisible()).toBe(true)
    })
})