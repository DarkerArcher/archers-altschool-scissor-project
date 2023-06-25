import {describe, it, expect} from '@jest/globals'
import { mount } from '@vue/test-utils'
import LandingPageVue from '@/views/LandingPage.vue'

describe('LandingPage', () => {
    it('should render correctly', () => {
        const wrapper = mount(LandingPageVue)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render the correct markup', () => {
        const wrapper = mount(LandingPageVue)
        expect(wrapper.html()).toContain('<div class="landing-container">')
    })
})