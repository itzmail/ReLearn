| Stateless                                                        | Statefull                                                                                                                   |
|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - State doesn't change over time - Build function only runs once | - State can change over time - setState() triggers the build function                                                        |
|                                                                  | initState() - Dipanggil sekali ketika widget dibuat - Subscribe to streams or any object that could change our widget data  |
|                                                                  | Build() - Builds the widget tree (usually is group of stateless widget) - A build is triggered every time we use setState() |
|                                                                  | Dispose() - When the widget/state object is removed                                                                         |
