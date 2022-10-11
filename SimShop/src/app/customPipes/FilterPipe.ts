import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customPipe',


})
export class CustomPipePipe implements PipeTransform {

    transform(value: any, searchvalue: any) {
        return value.filter(function(search) {
            return search.Name.toLowerCase().indexOf(searchvalue) > -1
        })
    }


}