import { createStore } from "vuex";
const store = createStore({
    state:{
        isOpenStartMenu:false,
        powerOff:false,
        isBeginTurnOff:false,
        startButton:false,
        startingQuery:{
            loadingScreen:false,
            welcomeScreen:false,
        },
        folders:[],
        folderCount:1,
        folderCountError:false,
        selectedFolderTab:"window",
        openComputerWindow:false,
        openMsnWindow:false
    },
      mutations: {
    turnOnWindows(state ) {
      setTimeout(() => { //disable start button after click .4s
        state.startButton = true
      }, 400);
      setTimeout(() => { // loading screen show 1s delay after click
        state.startingQuery.loadingScreen = true
        setTimeout(() => { // hide loading screen and show welcome screen after 5s
          state.startingQuery.loadingScreen = false
          state.startingQuery.welcomeScreen = true
          setTimeout(() => { // hide welcome screen after  2s and hide blank page.
            state.startingQuery.welcomeScreen = false
            state.powerOff=false
          }, 3000);
        }, 5000);
      
    }, 1000);
    },
    turnOffWindows(state ){
        state.isBeginTurnOff=true // show closing screen
        setTimeout(() => {//hide closing screen and show blank power screen 2s delay
            state.isBeginTurnOff=false
            state.powerOff=true
            state.startButton=false

        }, 4000);
    },
    createFolder(state){
      if(state.folders.length >=1)
      {
        state.folderCountError=true
      }
      if(state.folders.length <1)
      {
          state.folderCount += 1
      }
    },
    removeFolder(state,id){
      state.folders=state.folders.filter(i => i != id)
      state.folderCount = state.folders.length
    }
}
})

export default store; 
