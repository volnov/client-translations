module.exports = {
  self: 'xroom',
  title: 'Seu espaço de trabalho seguro',
  goToDash: 'Vá para o Painel de Controle',
  netStatus: 'Conexão',
  buttons: {
    ok: 'Ok',
    cancel: 'Cancelar',
    yes: 'Sim',
    no: 'Não',
    chN: 'Escolha %s',
    install: 'Adicionar',
    uninstall: 'Remover',
    details: 'Ver detalhes',
    close: 'Fechar',
    next: 'Próximo',
    back: 'Voltar',
    retry: 'Tentar Novamente',
    dismiss: 'Ignorar',
    allow: 'Permitir',
    stop: 'Parar',
    decideLater: 'Decidir mais tarde',
    knock: 'Knock',
    leave: 'Leave',
  },
  mbox: {
    notSupported: 'Parece que este navegador não suporta esta plataforma ou o WebRTC está desativado. 😢',
    protoExpired: 'A versão do cliente é muito antiga. Por favor, pressione Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;F5 para recarregar. Se você ver essa mensagem novamente, limpe o cache do seu navegador manualmente.',
    areYouSure: 'Tem certeza?',
    noPermission: 'Não é possível adquirir permissões do seu navegador. Certifique-se de que eles não estão bloqueados.',
    mediaBlocked: 'O acesso à câmera está bloqueado. Certifique-se de que não a está usando em outro navegador ou programa.',
    mediaError: 'You provided access to your hardware devices, but a local problem in your system prevented your device from being used. Please try another browser or another device.',
    whatIsYourName: 'Qual é o seu nome?',
    noPeersP2P: 'As mensagens não usam servidores para enviar e não podem ser reenviadas após a conexão de convidados recém-adicionados. Por favor, espere até que outras pessoas entrem na conversa para enviar mensagens.',
    noPeers: 'As mensagens não podem ser reenviadas após a conexão de convidados recém-adicionados. Por favor, espere até que outras pessoas entrem na conversa para enviar mensagens.',
    password: 'Criar senha para a sala',
    roomLocked: 'Esta sala está trancada. Você deseja bater para entrar?',
    roomProtected: 'Esta sala está protegida por uma senha. Por favor, a insira abaixo.',
    roomIsFull: 'A sala está cheia. Você não pode entrar.',
    alreadyHosted: 'Você já está na sala. Você provavelmente está com várias guias do navegador abertas ao mesmo tempo. Você deseja entrar? Os recursos do host podem não funcionar aqui.',
    youAreKicked: 'Você foi removido desta sala.',
    setQFailed: 'Falha ao definir a qualidade solicitada. Seu hardware ou navegador pode não suportá-la.',
    bookingEnded: 'Esta reserva acabou. A sala está reservada para outro evento, então agora você será redirecionado para outra sala para poder encerrar sua reunião.',
    bookingEndedHost: 'A reserva atual para esta sala terminará em breve. Você deve escolher agora, pois outra reserva foi agendada usando o mesmo nome de sala.<br/><br/>1. Vá para uma nova reunião. Iremos direcioná-lo ao painel para entrar na reunião com uma nova chave de organizador.<br/><br/>2. Fique na reunião. Vamos criar uma nova sala para você terminar esta chamada.',
    pluginsLoadFailed: 'Falha ao carregar plug-ins',
    roomDestroyed: 'A sala foi excluída. Você será redirecionado para a página inicial.',
    encInfo: 'Criptografia: peer-to-peer, ECDH+AES<br/>Hash: <code>%s</code>',
    encFailure: 'Encriptação não compatível',
    badBrowser: 'This user has a bad browser. Tell them not to use Safari or you may face bugs.',
    avaTooBig: 'O tamanho do arquivo de avatar é muito grande. Em vez disso, use imagens vetoriais simples.',
    cannotLoadPlugin: 'O plug-in "%s" não é compatível com o seu navegador',
    confirmLeave: 'Tem certeza de que deseja sair da chamada?',
    confirmDestroy: 'Tem certeza de que deseja encerrar a reunião para todos os participantes?',
    feedbackDetected: 'Detectamos ruídos de retorno no microfone e silenciamos você automaticamente. Sugerimos que você use fones de ouvido ou mantenha o microfone desligado até entrar na sala.',
    guestKnock: 'Usuário <b>%s</b> deseja entrar. Permitir?<br/>Você pode decidir mais tarde na guia da sala de espera.',
    safariNotSupported: 'Este recurso é temporariamente não compatível com o Safari.',
    p2pNotSupported: 'Este recurso está desativado no modo peer-to-peer.',
    takeOverSharing: 'Compartilhar sua tela agora encerrará a sessão atual de compartilhamento de tela.',
    p2pInfo: 'O modo P2P desativa o uso de nossos servidores centralizados.<br/><u>A estabilidade da sala dependerá da sua rede.</u><br/>Recomendado para reuniões privadas de 2 pessoas.',
    confirmKick: 'Tem certeza de que deseja remover %s desta sala??',
    comingSoon: 'Esta recurso estará disponível em breve.',
    audioChanged: 'Dispositivo de entrada de áudio adicionado. Deseja selecionar qual usar agora?',
    domainNotSetUp: 'This domain has not yet been set up. If you are its owner please do it in the dashboard. We will now forward you to our free service.',
    domainNotPaid: 'Your account has been temporarily deactivated due to not being current on payments. We will now forward you to our free service.',
    badLuck: 'Something went seriously wrong with the network. We will now try to reload your browser.',
    noEmbedding: 'Embedding protection is on. You may turn it off in the dashboard.',
    pluginSuggested: 'Utilizador %s sugeriu para instalar o plugin %s. Continuar?',
  },
  notify: {
    slowPlugins: 'Muitos plug-ins podem causar tempos de carregamento mais lentos. Considere remover o maior.',
    peerLost: 'Reconectando com %s...',
    roomLocked: 'Sala trancada 🔒',
    roomUnlocked: 'Sala destrancada 🔓',
    roomPwdSet: 'Senha da sala definida 🔑',
    roomPwdReset: 'Senha da sala excluída',
    devicesChanged: 'Dispositivos alterados',
    hostMutedAudio: 'O organizador silenciou o seu microfone',
    hostMutedVideo: 'O organizador desligou sua câmera',
    incomingFile: 'Recebendo arquivo...',
  },
  upsell: {
    hd: 'HD video',
    notFree: '<b>%s</b> is only available with your own spaces. Try it right now for free.',
    startTrial: 'Start a trial',
    notInterested: 'Not interesting',
  },
  hint: {
    p2p: '<u>Esta plataforma</u> utiliza servidores para garantir transmissões de alta qualidade durante suas reuniões.<br/><br/>• Nunca temos acesso às suas comunicações neste modo.<br/><br/>• Todos os dados enviados através de nossos servidores são criptografados e bloqueados com chaves que apenas você e seus convidados têm acesso.<br/><br/><u>Se você precisar de segurança máxima,</u> você pode desativar nossos servidores e, em vez disso, usar o modo Peer-to-Peer.<br/><br/>• Neste modo, vídeos e áudios são enviados diretamente entre você e seus convidados, sem usar os servidores do sfu.<br/><br/>• Recomendamos o uso do modo Peer-to-Peer quando você espera ter uma reunião um a um.',
  },
  modes: {
    '1': 'Conferência: todo mundo pode falar',
    '2': 'Webinar: um fala, os outros escutam',
  },
  placements: {
    '1': 'Vista da grade',
    '2': 'Mini-me',
    '3': 'Spotlight',
  },
  perm: {
    head: 'Permitir permissões do navegador',
    video: 'Vídeo',
    audio: 'Áudio',
    notif: 'Notificações',
  },
  videoMenu: {
    hint: 'Menu contextual',
    expand: 'Expandir',
    pip: 'Manter no topo',
    fullscreen: 'Tela cheia',
    fullscreenOff: 'Sair da tela cheia',
    volume: 'Volume',
    restore: 'Restaurar',
    kick: 'Remover participantes',
    mute: 'Mudo (apenas para você)',
    unmute: 'Tirar do mudo',
    pm: 'Chat privado',
    makeHost: 'Passar papel de organizador',
  },
  controls: {
    sharing: 'Compartilhando',
    cam: 'Câmera',
    mic: 'Microfone',
    chat: 'Chat',
    exit: 'Sair',
    destroy: 'Finalizar reunião',
    settings: 'Configurações',
    plugin: 'Plugins',
    dots: 'Menu contextual',
    invite: 'Convidar',
    ss: 'Compartilhar tela',
    stopSharing: 'Parar compartilhamento',
    board: 'Quadro branco',
    hand: 'Levantar a mão',
    lock: 'Trancanda',
    layouts: 'Posição',
    emoji: 'Emojis',
    attach: 'Anexar um arquivo',
    setLock: 'Trancar a sala',
    resetLock: 'Destrancar a sala',
    setPwd: 'Definir uma senha',
    rotate: 'Câmera Traseira/Frontal',
    more: 'Mais',
    users: 'Participantes',
  },
  reactions: {
    handRaised: 'Usuário %s deseja falar 🎤',
  },
  video: {
    you: 'Você (clique para nomear)',
    sharing: 'Você está compartilhando sua tela',
  },
  settings: {
    tabs: {
      audio: 'Áudio',
      video: 'Vídeo',
      general: 'Geral',
      help: 'Ajuda',
      chat: 'Chat',
      peers: 'Participantes',
      lobby: 'Sala de espera',
    },
    audioQ: 'Taxa de amostragem máxima',
    videoQ: 'Qualidade máxima de vídeo',
    screenQ: 'Qualidade máxima de compartilhamento de tela',
    bandwidthQ: 'Perfil de Bandwidth',
    soundEffects: 'Efeitos sonoros',
    audioDevices: 'Fontes de áudio',
    videoDevices: 'Fontes de vídeo',
    language: 'Idioma',
    theme: 'Cor do tema',
    requestAudio: 'Solicitar permissão de áudio',
    requestVideo: 'Solicitar permissão de vídeo',
    testOutput: 'Testar saída de áudio',
    flipFace: 'Espelhe a visualização da sua câmera',
    requireName: 'Requer nome',
    debug: 'Modo de depuração',
    noPreview: 'Iniciar chats sem visualização',
    menuPos: 'Posicionamento do menu',
    menuPosO: {
      '1': 'topo',
      '2': 'final',
    },
    name: 'Set/change your display name',
    phName: 'your name',
  },
  home: {
    title: 'Sua sala de conferência pessoal',
    btnGo: 'Ir!',
    nameRoom: 'nomeie sua sala:',
    placeholder: 'digite aqui',
    rejoinRoom: 'ou junte-se novamente',
    poweredBy: 'Distribuído por <a href="https://xroom.app">xroom.app</a>',
    roomHint: 'Digite o nome da sala, por favor',
  },
  pre: {
    selectMode: 'Escolha o tipo de reunião',
    selectedMode: 'Tipo de reunião',
    btnGo: 'Entrar',
    btnPreview: 'Visualizar',
    avaPicker: 'Escolha o avatar (mostra quando o vídeo está desligado)',
    sizeLimitReached: 'Esta sala é limitada em tamanho e o limite foi atingido',
    roomBooked: 'Haverá um evento nesta sala em breve: <span>%s</span>.<br/>Por favor, aguarde até a reunião começar.',
    roomInfo: 'Informações da sala',
    phInfo: 'Insira as informações da sala',
    pendingAdmission: 'Por favor, espere até que o organizador deixe você entrar.',
    p2pMode: 'Modo Peer-to-peer',
    btnGoHome: 'Go to start page',
    btnAsHost: 'Enter as a host',
    roomLocked: 'This room is locked by the host.<br />Please knock to enter.',
    roomLockedInfo: 'Please enter your name.<br />Otherwise the host might not allow you into the meeting.',
  },
  inviter: {
    info: 'Compartilhe o link abaixo para convidar outras pessoas para a reunião.',
    head: 'Link da sala:',
    btnCopy: 'Copiar link',
    btnShare: 'Compartilhar link',
    ntfCopied: 'O link foi copiado!',
  },
  chat: {
    publicChat: 'Chat público',
    chatWith: 'Chat com %s',
    fileSending: 'Enviando arquivo: ',
    fileReceived: 'Arquivo recebido: ',
    phInput: 'Digite uma mensagem...',
    me: 'eu',
    dropMe: 'Me envie!',
    atTime: 'às %s',
    recvProgress: 'recebendo dados criptografados: %s%...',
  },
  peers: {
    muteOnEntry: 'Silenciar participantes na entrada',
    camsOff: 'Desligar todos os vídeos',
    micsOff: 'Silenciar todos',
  },
  knockers: {
    phEmpty: 'Se alguém bater para entrar na sua sala, a pessoa aparecerá aqui, aguardando a sua aprovação.',
  },
  webinar: {
    peersCount: {
      one: '%s pessoa está assistindo',
      many: '%s pessoas estão assistindo',
    },
  },
  plugins: {
    by: 'by',
    size: 'Tamanho: %s kB',
    phSearch: 'pesquisa...',
    source: 'Código fonte: ',
    apiDocs: 'Documentos API',
    vendor: 'Fornecedor:',
    btnAdd: 'Adicionar próprio',
    add: {
      title: 'Adicionar novo plugin',
      descr: '⚙️ Desenvolvendo um novo plugin? Adicione ele aqui para testar. Ele não é salvo em nenhum lugar, mas sim no seu navegador.',
      name: 'Qual é o nome do plugin?',
      rootUrl: 'Onde está a raiz do plugin?',
      loaded: 'Aeee! Está carregado!',
      loadFailed: 'Falha ao carregar o plugin',
    }
  },
  help: {
    sevenTips: '7 Principais Problemas/Correções',
    connIssues: 'Problemas de conexão',
    laggyMedia: 'Áudio/vídeo com atraso',
    unlockMedia: 'Desbloquear câmera/microfone',
    faq: 'Vá para Perguntas Frequentes',
    submitFeature: 'Solicitar um recurso',
  },
}
