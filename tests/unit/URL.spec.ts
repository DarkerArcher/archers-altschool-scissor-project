import {describe, it, expect} from '@jest/globals'
import { mount } from '@vue/test-utils'
import URLComponentVue from '@/views/URLComponent.vue'

describe('URLComponent', () => {
    it('should render correctly', () => {
        const wrapper = mount(URLComponentVue)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render the correct markup', () => {
        const wrapper = mount(URLComponentVue)
        expect(wrapper.html()).toContain('<div class="url-container">')
    })
})