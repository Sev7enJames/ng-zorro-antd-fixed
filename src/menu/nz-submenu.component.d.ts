import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NzMenuComponent } from './nz-menu.component';
export declare class NzSubMenuComponent implements OnInit, OnDestroy, AfterViewInit {
    nzMenuComponent: NzMenuComponent;
    cd: ChangeDetectorRef;
    private _open;
    isInDropDown: boolean;
    level: number;
    _$mouseSubject: Subject<{}>;
    subMenus: any;
    nzOpenChange: EventEmitter<boolean>;
    nzOpen: boolean;
    readonly subItemSelected: boolean;
    readonly submenuSelected: boolean;
    readonly expandState: string;
    clickSubMenuTitle(): void;
    clickSubMenuDropDown(): void;
    onMouseEnterEvent(e: MouseEvent): void;
    onMouseLeaveEvent(e: MouseEvent): void;
    readonly setDropDownSubmenuClass: boolean;
    readonly setMenuSubmenuOpenClass: boolean;
    readonly setDropDownVerticalClass: boolean;
    readonly setDropDownHorizontalClass: boolean;
    readonly setMenuSubmenuClass: boolean;
    readonly setMenuSubmenuSelectedClass: boolean;
    readonly setMenuVerticalClass: boolean;
    readonly setMenuHorizontalClass: boolean;
    readonly setMenuInlineClass: boolean;
    constructor(nzMenuComponent: NzMenuComponent, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
