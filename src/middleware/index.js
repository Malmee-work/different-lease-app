export const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    return result
  }

export const crashReporter = store => next => action => {
    try {
      return next(action)
    } catch (err) {
      console.error('Caught an exception!', err)
      throw err
    }
  }