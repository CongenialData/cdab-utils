/**
 * The ScrollToOptions dictionary of the CSSOM View spec contains properties specifying where an element should be scrolled to, and whether the scrolling should be smooth
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions
 */
export interface IOptions {
    /**
     * Specifies the number of pixels along the X axis to scroll the window or element.
     */
    xOffset?: number;
    /**
     * Specifies the number of pixels along the Y axis to scroll the window or element.
     */
    yOffset?: number;
    /**
     * Specifies whether the scrolling should animate smoothly, or happen instantly in a single jump. This is actually defined on the ScrollOptions dictionary, which is implemented by ScrollToOptions.
     *
     * Defaults to `smooth`
     */
    behavior?: ScrollBehavior;
}
declare type TRequired = Required<Omit<ScrollToOptions, 'behavior'>>;
/**
 * Scrolls the window to an element in the view.
 * The scrollTo() method of the Element interface scrolls to a particular set of coordinates inside a given element.

 * @param target The HTMLElement to scroll to
 * @param options
 */
export declare function scrollTo(target: HTMLElement, options?: IOptions): void;
/**
 * Scrolls the window to a position of the screen
 *
 * Uses Window.scrollTo() to scroll to a particular set of coordinates in the document.
 *
 * @param target The Left (x) and Top (y) pixels of the screen to scroll to
 * @param options
 */
export declare function scrollTo(target: TRequired, options?: IOptions): void;
export {};
