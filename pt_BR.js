export default {
  self: 'xroom',
  on: 'Ligado',
  off: 'Desligado',
  title: 'Precisa de uma sala de conferência?',
  buttons: {
    ok: 'OK',
    yes: 'Sim',
    no: 'Não',
    cancel: 'Cancelar',
    retry: 'De novo',
    chooseWindow: 'Escolher janela',
    wholeScreen: 'Tela inteira',
    install: 'Adicionar',
    uninstall: 'Remover',
    send: 'Enviar',
    close: 'Fechar',
    hide: 'Esconder',
    knock: 'Toc-Toc',
    allowIn: 'Permitir entrar',
    deny: 'Negar',
    enterAnyway: 'Entrar de qualquer forma',
    enterHost: 'Enter as a host',
    details: 'Detalhes',
  },
  mbox: {
    notSupported: 'Parece que este navegador não suporta XROOM ou o WebRTC está desativado. 😢',
    success: 'Operação bem sucedida',
    failure: 'Operação falhou',
    enterRoomName: 'Digite o nome da sala',
    isCamOn: 'A câmera está ligada?',
    isCamOnText: 'Verifique, por favor, se não bloqueou acidentalmente a câmera e clique "Repetir".',
    isMicOn: 'Microfone está ligado?',
    isMicOnText: 'Se deseja conversar, dê permissão ao microfone. Após conceder permissão, clique em "Repetir".',
    iWillOnlyWatch: 'Apenas irei assistir',
    iWillOnlyListen: 'Apenas irei ouvir',
    screenSharingText: 'Compartilhamento de tela não permitido. Certifique-se de que não está bloqueado para esta página.<br><br>Além disso, esse recurso só é compatível com navegadores modernos, como Chrome ou Firefox.',
    cannotFile: 'Como não recebemos seu arquivo, não conseguimos enviá-lo após diversas tentativas. Precisa ser feito onde tem participantes.',
    cannotMessage: 'Como não recebemos sua mensagem, não conseguimos enviá-la após diversas tentativas. Precisa ser feito onde tem participantes.',
    roomLockedText: 'Sala bloqueada',
    oops: 'Desculpe',
    kickedOutText: 'Você foi expulso',
    areYouSure: 'Tem certeza?',
    restartRequiredText: 'Esta alteração afeta muitos participantes, reinicialização necessária, não se preocupe, será rápido!',
    onlySafariOnIOS: 'Em iOS apenas Safari é compativel.',
    cannotLoadPlugin: 'Plugin "%s" não é compativel com o browser',
    confirmFileSend: 'Deseja enviar?',
    whatIsYourName: 'Digite seu nome',
    setVideoVolume: 'Definir volume para este vídeo',
    roomLockedTryKnockText: 'Sala bloqueada no momento. Peça permissão para entrar.',
    knockingFailedText: 'Tentativa falhou',
    doYouWantToKick: 'Quer expulsar este participante?',
    deviceChanged: 'Adicionou/Removeu novo dispositivo. Se não estiver funcionando, escolha manualmente a partir das definições.',
    allowCameraPlz: 'Após clicar em OK <b>pertmitirá o</b> xroom utilizar sua câmera.<br><br>Não se preocupe! Poderá desligar novamente antes de entrar em uma sala a partir do menu inferior se quer permanecer invisível.',
    tooOldBrowser: 'Navegador muito antigo ou incompatível. Muitas funcionalidades podem não estar disponiveis.',
    pluginsLoadFailed: 'Falha ao carregar plugin',
    protoExpired: 'Versão muito antiga. Aperte por favor Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 para recarregar. Se voltar a ver esta imagem, por favor limpe o cache.',
    peerError: 'Ocorreu um erro ao trocar informações com o ponto de acesso. Sugerimos que recarregue a página.',
    enterpriseOnly: 'Funcionalidades apenas para empresas.',
    pluginSuggested: 'Utilizador %s sugeriu para instalar o plugin %s. Continuar?',
    hostRoleRequired: 'Funcionalidades de anfitrião necessárias para esta operação.',
    alreadyHosted: 'Sala virtual com este nome já em uso. Não crie salas idênticas em navegadores diferentes. 😉',
    roomLockedPassword: 'Sala protegida com senha. Inserir a senha para ter acesso.',
    roomDestroyed: 'Sala foi removida. Será redirecionado para a página inicial.',
    roomBooked: 'Sala virtual agendada, não poderá ser criada até que agendamento expire ou seja removida.',
    nameRequired: 'O anfitrião da sala exige que você defina seu nome primeiro.',
    pipNotSupported: 'Seu navegador oferece suporte ao modo "picture-in-picture", mas está desabilitado em alguma parte das configurações.',
    copyFailed: 'A cópia falhou. Isso pode ser resultado das restrições do seu dispositivo.',
    noCryptoWarning: 'Este navegador não oferece suporte à criptografia. Não é seguro continuar.',
    bigFileDecryptWarn: 'O download começou. Pode demorar alguns segundos para descriptografar o arquivo.',
    roomMigrated: 'This room has been taken over by a booked meeting. Your call has been moved to another place and you will now be redirected there.',
  },
  notify: {
    slowPlugins: 'Os plugins levam muito tempo para carregar. Considere remover o mais pesado.',
  },
  home: {
    nisdos: 'Não utilizamos cockies',
    title: 'Sua sala de conferência',
    btnGo: 'Criar!',
    knowMore: 'Sobre xroom',
    nameRoom: 'nome da sala:',
    placeholder: 'escreva aqui',
    rejoinRoom: 'ou acesse novamente',
  },
  wl: {
    poweredBy: 'Desenvolvido por ',
  },
  modes: {
    1: 'Conferência',
    2: 'Webinar',
  },
  pre: {
    selectMode: 'Escolha o tipo de sala',
    checkIt: 'Verifique sua câmera e seu microfone',
    btnGo: 'Entrar',
    knockDenied: 'Seu pedido para entrar foi negado. Não pode entrar na sala. :(',
    knockRequested: 'Aguardando permissão. 👀',
    noAudio: '⚠️ Nenhum sinal de microfone detectado',
    roomIsBusyWebinar: 'O webinar/stream está em curso',
    roomIsBusyConference: 'A conferência está em curso',
    sizeLimitReached: 'Sala virtual limitada para uma quantidade de participantes que ja foi atingida',
    roomBooked: 'Haverá um evento nesta sala logo: <b>%s</b>.',
  },
  videoMenu: {
    hint: 'Alterar menu',
    expand: 'Expandir',
    pip: 'Manter no topo',
    fullscreen: 'Tela inteira',
    volume: 'Volume ±',
    restore: 'Restaurar',
    kick: 'Expulsar',
    mute: 'Mudo',
  },
  controls: {
    ss: 'Compartilhamento de Tela %s',
    cam: 'Cam %s',
    mic: 'Mic %s',
    chat: 'Chat %s',
    exit: 'Sair',
    destroy: 'Destruir',
    xroom: 'Desenvolvido por xroom',
    settings: 'Definições',
    plugins: 'Plugins',
    media: 'Media',
    more: 'Mais',
    letMeSpeak: 'Quero falar!',
    lock: 'Locking',
  },
  lockStatus: {
    locked: 'Sala bloqueada',
    open: 'Sala aberta',
    protected: 'Sala protegida por senha',
    placeholder: 'passqord da sala',
  },
  reactions: {
    letMeSpeak: 'Quero falar!',
  },
  waiting: {
    invite: 'Convide seus colegas',
    beforeCopy: 'clique para copiar',
    afterCopy: 'Copiado. Agora compartilhe!',
    webinar: 'Webinar não foi iniciado',
  },
  video: {
    you: 'Voce (clique para editar nome)',
    someone: 'Alguem',
    knocking: 'está tentando entrar na sala',
    poorNet: 'Conexão ruim',
  },
  chat: {
    fileSending: 'Enviando arquivo: ',
    fileReceived: 'Arquivo recebido: ',
    inputPlaceholder: 'escreva sua mensagem e clique "enter" ...',
    me: 'eu',
    dropMe: 'Sair!',
  },
  webinar: {
    peersCount: '%s pessoas assistindo',
  },
  settings: {
    experimental: '*) experimental, funcionamento instável',
    screenFace: 'Mostrar câmera durante o compartilhamento de tela (BETA)',
    flipFace: 'Mirror your camera',
    audioQ: 'Qualidade de áudio',
    videoQ: 'Qualidade de vídeo',
    screenQ: 'Qualidade do compartilhamento de tela',
    bandwidthQ: 'Perfil de largura de banda',
    autoGetIn: 'Iniciar chat sem pré-visualização',
    soundEffects: 'Efeitos sonoros',
    noisyBackground: 'Estou em um local com barulho',
    rtcDebug: 'Debug RTC',
    audioDevices: 'Recursos de áudio',
    videoDevices: 'Recursos de vídeo',
    language: 'Idioma',
    theme: 'Cor do tema',
    server: 'Servidor',
    keepControls: 'Manter controles visíveis',
  },
  plugins: {
    by: 'por',
    size: 'Tamanho: %s kB',
    searchPlaceholder: 'procurar...',
    source: 'Código fonte:',
    apiDocs: 'API docs',
    vendor: 'Fornecedor:',
    add: {
      title: 'Adicionar novo plugin',
      descr: '⚙️ desenvolvendo novo plugin? Adicione aqui para testar. Não foi salvo, Ao recarregar a página removerá da memória.',
      name: 'Qual nome do plugin?',
      rootUrl: 'Qual o root do plugin?',
      loaded: 'Sim! Foi descarregado!',
      loadFailed: 'Falhou descarregamento do plugin',
    }
  },
}
