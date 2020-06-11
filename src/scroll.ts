/**
 * The ScrollToOptions dictionary of the CSSOM View spec contains properties specifying where an element should be scrolled to, and whether the scrolling should be smooth
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions
 */
export interface IOptions {
  /**
   * Specifies the number of pixels along the X axis to scroll the window or element.
   */
  xOffset?: number

  /**
   * Specifies the number of pixels along the Y axis to scroll the window or element.
   */
  yOffset?: number

  /**
   * Specifies whether the scrolling should animate smoothly, or happen instantly in a single jump. This is actually defined on the ScrollOptions dictionary, which is implemented by ScrollToOptions.
   *
   * Defaults to `smooth`
   */
  behavior?: ScrollBehavior
}

type TRequired = Required<Omit<ScrollToOptions, 'behavior'>>

/**
 * Check if the target is an HTMLElement or not
 *
 * @param target Target to check if it is an HTMLElement or not
 * @returns Return true if target is element, otherwise false
 *
 */
const isElement = (target: HTMLElement | TRequired): target is HTMLElement => target instanceof HTMLElement

/**
 * Scrolls the window to an element in the view.
 * The scrollTo() method of the Element interface scrolls to a particular set of coordinates inside a given element.

 * @param target The HTMLElement to scroll to
 * @param options
 */
export function scrollTo(target: HTMLElement, options?: IOptions): void

/**
 * Scrolls the window to a position of the screen
 *
 * Uses Window.scrollTo() to scroll to a particular set of coordinates in the document.
 *
 * @param target The Left (x) and Top (y) pixels of the screen to scroll to
 * @param options
 */
export function scrollTo(target: TRequired, options?: IOptions): void

export function scrollTo(target: HTMLElement | TRequired, options?: IOptions): void {
  /** Specifies the number of pixels along the X axis to scroll the window or element. */
  let xTarget: number
  /** Specifies the number of pixels along the Y axis to scroll the window or element. */
  let yTarget: number

  const defaultOptions: Required<IOptions> = {
    behavior: 'smooth',
    xOffset: 0,
    yOffset: 0,
  }

  if (isElement(target)) {
    const { offsetLeft, offsetTop } = target
    xTarget = offsetLeft
    yTarget = offsetTop
  } else {
    xTarget = target.left
    yTarget = target.top
  }

  const { xOffset, yOffset, behavior }: Required<IOptions> = {
    ...defaultOptions,
    ...options,
  }
  const left = xTarget + xOffset
  const top = yTarget + (yOffset || 0)

  window.scrollTo({ left, top, behavior })
}
