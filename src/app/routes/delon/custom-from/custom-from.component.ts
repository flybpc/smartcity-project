import { Component, OnInit, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SFSchema, SFComponent, SFTextWidgetSchema } from '@delon/form';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; // add
@Component({
  selector: 'app-custom-from',
  templateUrl: './custom-from.component.html',
  styleUrls: ['./custom-from.component.less'],
})
export class CustomFromComponent implements OnInit {
  @ViewChild('sf', { static: false })
  sf: SFComponent;

  schema: SFSchema = {
    properties: {},
  };
  // chema: SFSchema = {
  //   properties: {
  //     intro: {
  //       type: 'string',
  //       ui: {
  //         widget: 'textDisplay',
  //         description: '1.以公民身份号码或法人和其他组织统一社会信用代码为唯一标识的电子证照使用率：',
  //       },
  //     },
  //     name: {
  //       type: 'number',
  //       title: '①已实现使用以公民身份号码或法人和其他组织统一社会信用代码为唯一标识的电子证照办理的政务服务事项数量:',
  //     },
  //     mobile: {
  //       type: 'number',
  //       format: 'mobile',
  //       title: '手机号',
  //     },
  //     sfz: {
  //       type: 'number',
  //       format: 'id-card',
  //       title: '身份证号',
  //     },
  //   },
  //   required: ['name'],
  // };
  layout = 'vertical';
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    zip(this.httpClient.get('assets/tmp/form-data.json'))
      .pipe(
        // 接收其他拦截器后产生的异常消息
        catchError(([appData]) => {
          return [appData];
        }),
      )
      .subscribe(
        ([appData]) => {
          // application data
          const res: any = appData;
          this.schema.properties = res;
          // this.schema.properties = res;
          this.sf.refreshSchema(this.schema);
        },
        () => {},
        () => {},
      );
  }
}
