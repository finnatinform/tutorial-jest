import * as $ from 'jquery' ;

class LoaderClass {
    __Items: Array<String> = [];

    constructor(){
        this.onLoadingDataFailed = this.onLoadingDataFailed.bind(this);
        this.onLoadingDataSucceeded = this.onLoadingDataSucceeded.bind(this);
    }

    public loadData(): void {
        $.getJSON( 'http://augenhoehe.scheisse.04' )
            .then( this.onLoadingDataSucceeded )
            .fail( this.onLoadingDataFailed ) ;
    }

    public isOnline(): boolean {
        return true;
    }

    protected onLoadingDataFailed(): void {
        throw new Error('loading data failed');
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

var Loader : LoaderClass = new LoaderClass();
export = Loader ;