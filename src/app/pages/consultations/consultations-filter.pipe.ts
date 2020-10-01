import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consultationsFilter'
})
export class ConsultationsFilterPipe implements PipeTransform {

  transform(items: any[], filter: any): any {
    if (!items || !filter) {
        return items;
    }

    if(isNaN(filter)){
      return items.filter(item => item.appointment?.customerDetails?.firstName?.toLowerCase().indexOf(filter.toLowerCase()) !== -1) || items.filter(item => item.appointment?.customerDetails?.lastName?.indexOf(filter) !== -1)
    }
    else{
      return items.filter(item => item.appointment?.mrn?.indexOf(filter) !== -1);
    }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        
  }

}
