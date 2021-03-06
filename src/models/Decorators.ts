// tslint:disable:ban-types
export function Entity(option: any): Function {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            private baseEntityDbName = option.baseEntityDbName;
            private baseEntitytableName = option.baseEntitytableName;
        };
    };
}

// export function socketEvent(event: string) { // logText就是傳進來的參數'write log'
//     return (target: Function, key: string, descriptor: any) => {
//         return {
//             value(...args: any[]) {  // args 是指 doubleNumber 的參數，也就是 input
//                 const fooParameter = args.map((a) => JSON.stringify(a)).join();
//                 const result = descriptor.value.apply(this, args);  // 就是執行 doubleNumber 這個 method 後，會得到的值
//                 console.log(`Call: ${key}(${fooParameter}) => ${result}`); // Call: doubleNumber(5) => 10
//                 return result;
//             }
//         };
//     };
// }
// export function log(target: Function, key: string, descriptor: any) {
//     return {
//         value(...args: any[]) {  // args 是指 doubleNumber 的參數，也就是 input
//             const fooParameter = args.map((a) => JSON.stringify(a)).join();
//             const result = descriptor.value.apply(this, args);  // 就是執行 doubleNumber 這個 method 後，會得到的值
//             console.log(`Call: ${key}(${fooParameter}) => ${result}`); // Call: doubleNumber(5) => 10
//             return result;
//         }
//     };
// }

export function EventController(name: any): Function {
    return <T extends { new(...args: any[]): {} }>(constructor: T) => {
        // tslint:disable-next-line:max-classes-per-file
        return class extends constructor {
            private name = name;
        };
    };
}
