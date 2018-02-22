export default class LoaderClass {
    __Items: Array<String> = [];

    constructor(){
        this.onLoadingDataFailed = this.onLoadingDataFailed.bind(this);
        this.onLoadingDataSucceeded = this.onLoadingDataSucceeded.bind(this);
    }

    public loadData(): void {
        
    }

    public isOnline(): boolean {
        return false;
    }

    protected onLoadingDataFailed(): void {
        throw new Error('Data could not be loaded');
    }

    protected onLoadingDataSucceeded(_Result: Array<String>): void {
        this.__Items = _Result;
    }

    public doSomething(): void {
        if (this.isOnline()) {
            this.loadData();
        }
    }
}