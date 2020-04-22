declare module "*.png" {
    const value: any;
    export = value;
 }

 declare module "*.css" {
    const content: { [className: string]: string };
    export = content;
 }

 declare module "*.svg" {
   const content: string;
   export = content;
 }

 declare module "*.jpg" {
   const value: any;
   export = value;
}