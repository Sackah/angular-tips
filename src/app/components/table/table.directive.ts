import {Directive, input} from '@angular/core';

type obj = Record<string, any>;

type TableHeaderContext<TItem extends obj> = {
  $implicit: TItem[];
};

@Directive({
  selector: 'ng-template[appTableHeader]',
  standalone: true,
})
export class TableHeaderDirective<TItem extends obj> {
  data = input.required<TItem[] | ''>({
    alias: 'appTableHeader',
  });

  static ngTemplateContextGuard<TContextItem extends obj>(
    dir: TableHeaderDirective<TContextItem>,
    ctx: unknown
  ): ctx is TableHeaderContext<TContextItem> {
    return true;
  }
}

type TableRowContext<TItem extends obj> = {
  $implicit: TItem;
};

@Directive({
  selector: 'ng-template[appTableRow]',
  standalone: true,
})
export class TableRowDirective<TItem extends obj> {
  data = input.required<TItem | ''>({
    alias: 'appTableRow',
  });

  static ngTemplateContextGuard<TContextItem extends obj>(
    dir: TableRowDirective<TContextItem>,
    ctx: unknown
  ): ctx is TableRowContext<TContextItem> {
    return true;
  }
}
