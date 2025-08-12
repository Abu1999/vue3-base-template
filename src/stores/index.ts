import { createPinia } from 'pinia'
// pinia的持久化
import { createPersistedState } from 'pinia-plugin-persistedstate'

//统一管理
import { useCounterStore } from './counter'

const pinia = createPinia()

pinia.use(createPersistedState())

export default pinia
export { useCounterStore }
