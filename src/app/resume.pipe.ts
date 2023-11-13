import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  malimit:number=0;

  transform(value: string, limit?: number): any{

    if(!value){
      return null;
    }
      this.malimit=(limit) ? limit : 20;
    return value.substr(0,this.malimit)+'....';
  }

}
