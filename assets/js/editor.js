const simplemde = new SimpleMDE({
  element: document.querySelector("#mdEditor"),
  spellChecker: false,
  autosave: {
    enabled: true,
    uniqueId: "editorContent",
    delay: 1000
  },
  toolbar: [{
      name: "bold",
      action: SimpleMDE.toggleBold,
      className: "fa fa-bold",
      title: "Negrito",
    }, {
      name: "italic",
      action: SimpleMDE.toggleItalic,
      className: "fa fa-italic",
      title: "Itálic",
    },
    {
      name: "quote",
      action: SimpleMDE.toggleBlockquote,
      className: "fa fa-quote-left",
      title: "Citação",
    },
    {
      name: "unordered-list",
      action: SimpleMDE.toggleUnorderedList,
      className: "fa fa-list-ul",
      title: "Lista",
    },
    {
      name: "ordered-list",
      action: SimpleMDE.toggleOrderedList,
      className: "fa fa-list-ol",
      title: "Lista numerada",
    },
    "|",
    {
      name: "heading-2",
      action: SimpleMDE.toggleHeading2,
      className: "fa fa-header fa-header-x fa-header-2",
      title: "Título",
    },
    {
      name: "heading-3",
      action: SimpleMDE.toggleHeading3,
      className: "fa fa-header fa-header-x fa-header-3",
      title: "Subtítulo",
    }, "|",
    {
      name: "link",
      action: SimpleMDE.drawLink,
      className: "fa fa-link",
      title: "Adicionar link",
    },
    {
      name: "image",
      action: SimpleMDE.drawImage,
      className: "fa fa-picture-o",
      title: "Adicionar imagem",
    },
    {
      name: "horizontal-rule",
      action: SimpleMDE.drawHorizontalRule,
      className: "fa fa-minus",
      title: "Adicionar separador",
    }, "|",
    {
      name: "preview",
      action: SimpleMDE.togglePreview,
      className: "fa fa-eye no-disable",
      title: "Visualizar",
    },
    {
      name: "side-by-side",
      action: SimpleMDE.toggleSideBySide,
      className: "fa fa-columns no-disable no-mobile",
      title: "Editar e visualizar ao mesmo tempo",
    },
    {
      name: "fullscreen",
      action: SimpleMDE.toggleFullScreen,
      className: "fa fa-arrows-alt no-disable no-mobile",
      title: "Abrir o editor em tela cheia",
    },
    {
      name: "guide",
      action: "https://simplemde.com/markdown-guide",
      className: "fa fa-question-circle",
      title: "Abrir ajuda de formatação",
    }
  ],
  promptURLs: true,
  status: false,
  forceSync: true
});
