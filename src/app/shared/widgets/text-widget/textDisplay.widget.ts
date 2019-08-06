import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '@delon/form';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'sf-text-display',
  templateUrl: './textDisplay.widget.html',
})
// tslint:disable-next-line: component-class-suffix
export class TextDisplayWidget extends ControlWidget implements OnInit {
  /* 用于注册小部件 KEY 值 */
  static readonly KEY = 'textDisplay';
  description: string;

  ngOnInit(): void {
    this.description = this.ui.description || '描述';
  }

  // reset 可以更好的解决表单重置过程中所需要的新数据问题
  reset(value: string) {}

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
