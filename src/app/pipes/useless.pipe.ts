import { Pipe, PipeTransform } from "@angular/core";

// Annotation section
@Pipe({ name: 'useless' })

// Pipe class
export class useless implements PipeTransform {
    transform(before: string, value: string, after: string): string {
        return `${before} ${value} ${after}`;
    }
}