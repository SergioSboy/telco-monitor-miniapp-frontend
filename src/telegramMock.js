import { mockTelegramEnv, parseInitData, miniApp } from "@telegram-apps/sdk";

const initializeTelegramSDK = () => {
    try {
        miniApp.ready();
    } catch (error) {
        if (process.env.NODE_ENV === "development") {
            console.error("Ошибка при инициализации Telegram:", error);
            const initDataString =  process.env.REACT_APP_MOCK_USER
            mockTelegramEnv({
                themeParams: {
                    accentTextColor: '#6ab2f2',
                    bgColor: '#17212b',
                    buttonColor: '#5288c1',
                    buttonTextColor: '#ffffff',
                    destructiveTextColor: '#ec3942',
                    headerBgColor: '#17212b',
                    hintColor: '#708499',
                    linkColor: '#6ab3f3',
                    secondaryBgColor: '#232e3c',
                    sectionBgColor: '#17212b',
                    sectionHeaderTextColor: '#6ab3f3',
                    subtitleTextColor: '#708499',
                    textColor: '#f5f5f5',
                },
                initData: parseInitData(initDataString),
                initDataRaw: initDataString,
                version: '7.2',
                platform: 'tdesktop',
            });
            console.log("Mock Telegram environment initialized");
        } else {
            window.location.href = "https://t.me/bamabao_bot";
        }
    }
};


export default initializeTelegramSDK;