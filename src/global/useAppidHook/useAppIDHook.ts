import { onMounted } from 'vue'
import localStorageCache from '../localStorageCache/index'
import { nanoid } from 'nanoid'

function judgeID() {
  //判断是否有ID

  if (localStorageCache.getItem('ID')) {
    console.log('已有ID', localStorageCache.getItem('ID'))
  } else {
    const ID: string = nanoid()
    localStorageCache.setItem('ID', ID)
    console.log('无ID，已添加ID', ID)
  }

}
export default judgeID
