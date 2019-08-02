import { Component,Pipe, PipeTransform} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
export type EditorType = 'name' | 'profile';


@Pipe({
  name:'sqrt'
})
export class SqrtPipe implements PipeTransform{
  transform(val:number){
    return Math.sqrt(val);
  }
}

@Pipe({
  name:'precision'
})
export class Precision implements PipeTransform{
  transform(val:number){
    return val.toPrecision(3);
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/