import {describe, it, expect} from '@jest/globals'
import { mount } from '@vue/test-utils'
import ToolsVue from '@/views/ToolsComponent.vue'

describe('Tools', () => {
    it('should render correctly', () => {
        const wrapper = mount(ToolsVue)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should render the correct markup', () => {
        const wrapper = mount(ToolsVue)
        expect(wrapper.html()).toContain('<div class="tools-container">')
    })
})