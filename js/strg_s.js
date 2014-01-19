function handle_actiontab (curr) {
	if (curr === 'phone') {
	  document.getElementById('calliframe').style.display = 'block';
	  document.getElementById('mailiframe').style.display = 'none';
	  document.getElementsByClassName('actiontab_phone')[0].className = 'actiontab actiontab_phone active'; 
	  document.getElementsByClassName('actiontab_mail')[0].className = 'actiontab actiontab_mail'; 
	}
	else {
	  document.getElementById('calliframe').style.display = 'none';
	  document.getElementById('mailiframe').style.display = 'block';
	  document.getElementsByClassName('actiontab_phone')[0].className = 'actiontab actiontab_phone'; 
	  document.getElementsByClassName('actiontab_mail')[0].className = 'actiontab actiontab_mail active'; 
	}
	return false;
}

function nextmep() {
  var els=[document.getElementById("calliframe"),
  document.getElementById("mailiframe")]
  for (i in els) {
    var e=els[i]
    var h=e.innerHTML
    e.innerHTML=""
    e.innerHTML=h
  }
 }

try {
  if (typeof $ !== 'undefined') {
    $(function () {
     $('span.mailcheat').each(
       function (i, el) {         
         if ($(el).attr('locip')) {
             var host = $(el).attr('domip') || window.location.host
             var mail = $(el).attr('locip') + '@' + host;
           $(el).html('<a href="mailto:' + mail + '">' + ($(el).attr('inner') || mail || el.innerText || 'mail') + '</a>');
         } else {
           $(el).html(el.innerText.replace(/^(\w+\.\w+) \\at\\ (savetheinternet.eu)/, '<a href="mailto:$1@$2">$1@$2</a>'));
         }
      });
    });
  }
} catch (e) {
  console.error('error in mailcheat', e);
}
  
try {
  if (typeof _paq !== 'undefined' && typeof $ !== 'undefined') {
    $('a.actiontab_phone').on('click', function () {_paq.push(['trackGoal', 2]);});
    $('a.actiontab_mail').on('click', function () {_paq.push(['trackGoal', 1]);});
    $('#shareside a,.hmid a').on('click', function () { _paq.push(['trackGoal', 3]); });
  }
} catch (e) {
  console.error('error in piwik goal tracking', e);
}

//  typeof _paq !== 'undefined' && 
//<a href="#" onclick="javascript:_paq.push(['trackPageView', 'Menu/Freedom']);">Freedom page</a>

