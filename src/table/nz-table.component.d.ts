import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, QueryList, TemplateRef } from '@angular/core';
import { NzThDirective } from './nz-th.directive';
export declare class NzTableComponent implements AfterViewInit, OnInit {
    private _elementRef;
    private _cd;
    private _bordered;
    private _customNoResult;
    private _isPageIndexReset;
    private _isPagination;
    private _loading;
    private _showSizeChanger;
    private _showQuickJumper;
    private _showTotal;
    private _showFooter;
    private _showTitle;
    /** public data for ngFor tr */
    data: any[];
    _scroll: {
        x: number;
        y: number;
    };
    _el: HTMLElement;
    _current: number;
    _total: number;
    _pageSize: number;
    _dataSet: any[];
    _isInit: boolean;
    _isAjax: boolean;
    ths: any[];
    nzPageSizeChange: EventEmitter<number>;
    nzPageIndexChange: EventEmitter<number>;
    nzDataChange: EventEmitter<any[]>;
    nzPageIndexChangeClick: EventEmitter<number>;
    nzSize: string;
    nzBordered: boolean;
    nzCustomNoResult: boolean;
    nzIsPagination: boolean;
    nzLoading: boolean;
    nzShowSizeChanger: boolean;
    nzShowQuickJumper: boolean;
    nzShowTotal: boolean;
    nzShowFooter: boolean;
    nzShowTitle: boolean;
    nzIsPageIndexReset: boolean;
    /** page size changer select values */
    nzPageSizeSelectorValues: number[];
    fixedHeader: TemplateRef<void>;
    setThs: QueryList<NzThDirective>;
    nzScroll: {
        x: number;
        y: number;
    };
    /** async data */
    nzAjaxData: any[];
    /** sync data */
    nzDataSource: any[];
    nzPageIndex: number;
    pageChangeClick(value: number): void;
    nzPageSize: number;
    nzTotal: number;
    _generateData(forceRefresh?: boolean): void;
    ngOnInit(): void;
    constructor(_elementRef: ElementRef, _cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    scrollTable(event: Event): void;
}
