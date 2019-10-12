import { bindable } from 'aurelia-framework';
import { fileCopy } from 'resources/icons';
import './copy-to-clipboard.less';

export class CopyToClipboard {
  @bindable value = 'CopyToClipboard';

  fileCopy = fileCopy;

  /**
 * Use this bindable if you pass the copied content directly.
 * @type {string}
 */
  @bindable text;

  /**
   * Use this bindable if you just want inner text of an html element.
   * @type {HTMLElement}
   */
  @bindable textWrapper;

  /**
   * Use this bindable if you want the inner html of an html element.
   * @type {HTMLElement}
   */
  @bindable htmlWrapper;

  @bindable onSuccessMessage = 'Copy to clipboard';

  constructor(element) {
    this.element = element;
  }

  copyToClipboard() {
    if (this.text || this.textWrapper) this.copyText();
    else if (this.htmlWrapper) this.copyHtml();
    this.onSuccessMessage = 'Copied to clipboard!';
  }

  /**
   * Create a textarea and set its value to `content` in order to achieve the
   * copy to clipboard behavior.
   * Based on
   * https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
   * Note: There is a way to use brower clipboard api, but support not widespread.
   *
   * @param {string} content
   */
  contentToClipboard(content) {
    const textarea = document.createElement('textarea');
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      throw new Error(err);
    } finally {
      document.body.removeChild(textarea);
    }
  }

  /**
   * Get inner html as string of an html element.
   */
  copyHtml() {
    const htmlToCopy = this.htmlWrapper.innerHTML.trim();
    this.contentToClipboard(htmlToCopy);
  }


  /**
   * Get the inner text of an html element.
   */
  copyText() {
    const textToCopy = this.text || this.textWrapper.innerText;
    this.contentToClipboard(textToCopy);
  }
}
