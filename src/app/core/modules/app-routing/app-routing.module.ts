import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from 'app/page/welcome/welcome.component';
import { ButtonComponent } from 'app/page/button/button.component';
import { ButtonToggleComponent } from 'app/page/button-toggle/button-toggle.component';
import { IconComponent } from 'app/page/icon/icon.component';
import { MenuComponent } from 'app/page/menu/menu.component';
import { SidenavComponent } from 'app/page/sidenav/sidenav.component';
import { ToolbarComponent } from 'app/page/toolbar/toolbar.component';
import { DividerComponent } from 'app/page/divider/divider.component';
import { ListComponent } from 'app/page/list/list.component';
import { FormFieldComponent } from 'app/page/form-field/form-field.component';
import { SelectComponent } from 'app/page/select/select.component';
import { InputComponent } from 'app/page/input/input.component';
import { CheckboxComponent } from 'app/page/checkbox/checkbox.component';
import { AutocompleteComponent } from 'app/page/autocomplete/autocomplete.component';
import { SlideToggleComponent } from 'app/page/slide-toggle/slide-toggle.component';
import { RadioButtonComponent } from 'app/page/radio-button/radio-button.component';
import { BadgeComponent } from 'app/page/badge/badge.component';
import { BottomSheetComponent } from 'app/page/bottom-sheet/bottom-sheet.component';
import { CardComponent } from 'app/page/card/card.component';
import { ChipsComponent } from 'app/page/chips/chips.component';
import { DatepickerComponent } from 'app/page/datepicker/datepicker.component';
import { DialogComponent } from 'app/page/dialog/dialog.component';
import { ExpansionPanelComponent } from 'app/page/expansion-panel/expansion-panel.component';
import { GridListComponent } from 'app/page/grid-list/grid-list.component';
import { PaginatorComponent } from 'app/page/paginator/paginator.component';

const routes: Routes = [
  { path: 'autocomplete', component: AutocompleteComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'bottom-sheet', component: BottomSheetComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'card', component: CardComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'form-field', component: FormFieldComponent },
  { path: 'grid-list', component: GridListComponent },
  { path: 'icon', component: IconComponent },
  { path: 'input', component: InputComponent },
  { path: 'list', component: ListComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'radio-button', component: RadioButtonComponent },
  { path: 'select', component: SelectComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'slide-toggle', component: SlideToggleComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
