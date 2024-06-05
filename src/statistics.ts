import * as $ from 'jquery'

function createStatistics(): { destroy: () => string; getClicks: () => number | string } {
    let counter = 0
    let isDestroyed = false
    const listener = () => counter++

    $(document).on('click', listener)

    return {
      destroy() {
          $(document).off('click', listener)
          isDestroyed = true
          return 'Statistics was fully destroyed'
        },
        getClicks() {
          if (isDestroyed) return 'Statistics is destroyed'
          return counter
        }
    }
  }
    window['statistics'] = createStatistics()