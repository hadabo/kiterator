const getDependencies = (techs, dependencies, versions) => {
  let result = {npm: {}, npmDev: {}, bower: {}}
  let techsArray = []

  const getVersion = (type, key) => {
    return versions[type][key]
  }

  // Get all techs
  for (let key in techs) {
    if (typeof techs[key] === 'object') {
      techs[key].map((techItem) => {
        techsArray.push(techItem)
      })
    } else {
      techsArray.push(techs[key])
    }
  }

  // Distrubute dependencies
  techsArray.map((value) => {
    if (dependencies[value]) {
      for (let pm in dependencies[value]) {
        if (dependencies[value][pm]) {
          dependencies[value][pm].map((val) => {
            let _pm = (pm == 'npmDev') ? 'npm' : pm
            result[pm][val] = getVersion(_pm, val)
          })
        }
      }
    }
  })

  return result
}

module.exports = getDependencies