/**
 * "aLtErNatInG CasE" eXtEnsIoN fOr pOpcLiP, FoR AlL YoUr mEmING NeeDS.
 * iCoN: sPonGe bY BeN dAvIs fRoM ThE NoUn pRoJeCt
 * @author Nick Moore
 * @module AlternatingCase
 */

/**
 * Make characters alternately upper/lower case, with optional randomness sprinkled in.
 */
function alternatingCase (string: string, options?: {randomness?: boolean}): string {
  function rnd (): number {
    return options?.randomness === true ? Math.random() : 0
  }
  function start (): number {
    return rnd() < 0.5 ? 0 : 1
  }
  function step (): number {
    const x = rnd()
    if (x < 0.8) return 2
    if (x < 0.9) return 3
    return 1
  }
  const characters = string.toLowerCase().split('')
  for (let item = start(); item < characters.length; item += step()) {
    characters[item] = characters[item].toUpperCase()
  }
  return characters.join('')
}

const extension: Extension = {
  action: (selection, options) => {
    popclip.pasteText(alternatingCase(selection.text, { randomness: options.randomness as boolean }))
    return null
  },
  options: [
    {
      identifier: 'randomness',
      label: 'Add Randomness',
      type: 'boolean'
    }]
}
export default extension
