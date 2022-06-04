'use strict';

{
    chrome.runtime.onInstalled.addListener(() => {
        const parent = chrome.contextMenus.create({
            id: 'lyricssearch',
            title: '歌詞検索',
            contexts:["selection"]
        });
    });

    chrome.contextMenus.onClicked.addListener(item => {
        console.log(item);
        console.log(item.menuItemId);
        let targetURL = 'https://www.google.com/search?q=' + item.selectionText + '　歌詞';
        chrome.tabs.create({
            url: targetURL
        })
    });
}