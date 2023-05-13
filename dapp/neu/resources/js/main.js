let settings = async () => {
    try {
        await Neutralino.window.setSize({
            minWidth: 200,
            minHeight: 300,
            width: 270,
            height: 300,
            resizable: false
        });
        await Neutralino.window.setTitle('Me')
    } catch (error) {
        console.error(error)
    }
}

Neutralino.init()
Neutralino.events.on('ready',settings())