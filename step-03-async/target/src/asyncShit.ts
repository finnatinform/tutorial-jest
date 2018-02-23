export function doAsyncCallbackShit(_Callback: any ): void {
    _Callback('Borussia Dortmund');
}
export async function doAsyncPromiseShit(): Promise<string> {
    // await calls.
    return 'Borussia Dortmund';
}