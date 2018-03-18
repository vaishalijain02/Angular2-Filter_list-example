
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderBy', pure: false})
export class OrderByPipe implements PipeTransform {
    //for sort on single property

    static Comparator(a:any, b:any):number{
        //console.log("comparator:",a,b);
    
      if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
      
        if(a.toLowerCase() < b.toLowerCase()) return -1;
        if(a.toLowerCase() > b.toLowerCase()) return 1;
      }
      else{
        
        if(parseFloat(a) < parseFloat(b)) return -1;
        if(parseFloat(a) > parseFloat(b)) return 1;
      }
    
      return 0; 
    }

    transform(input:any, [prop = '+']): any{
      
        if(!Array.isArray(input)) return input;

            //console.log("input:",input,!Array.isArray(prop),prop[0]);
        
            var order:string = !Array.isArray(prop) ? prop : prop[0];
            var acsn = order.substr(0, 1) == '+';
            if(!order || order == '-' || order == '+'){
                return acsn ? input.sort() : input.sort().reverse();
            }
            else {
                var property:string = order.substr(0, 1) == '+' || order.substr(0, 1) == '-'
                    ? order.substr(1)
                    : order;

                return input.sort(function(a:any,b:any){
                    return acsn 
                        ? OrderByPipe.Comparator(a[property], b[property]) 
                        : -OrderByPipe.Comparator(a[property], b[property]);
                });
            }
       
      
    }
}
