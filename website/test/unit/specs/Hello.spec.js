import {shallow} from 'vue-test-utils'
// import {createRenderer} from 'vue-server-renderer'

import router from '@/router'

import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Test Message'
    const wrapper = shallow(Hello, {
      propsData: {msg: msg},
      router
    })
    expect(wrapper.find('div > h1').text()).toBe('Test Message')
  })
  it('shows the user as logged out initially', () => {
    const wrapper = shallow(Hello, {
      router
    })
    expect(wrapper.find('div > h3').text()).toBe('You are currently logged out')
  })
  it('shows a link to the secure page', () => {
    const wrapper = shallow(Hello, {
      router
    })
    console.log(wrapper.find('#app > div > div > ul > li:nth-child(2) > a'))
  })

})
