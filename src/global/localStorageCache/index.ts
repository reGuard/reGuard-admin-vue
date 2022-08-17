class localStorageCache {
  setItem(name: string, value: any) {
    localStorage.setItem(name, JSON.stringify(value))
  }

  getItem(name: string) {
    const result: any = localStorage.getItem(name)
    return JSON.parse(result)
  }
}

export default new localStorageCache()
