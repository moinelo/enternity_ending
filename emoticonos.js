<!-- (Script Emoticones) -->
<script type='text/javascript'>
//<![CDATA[
document.getElementsByClassName = function(clsName)
{
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++)
	{
        if(elements[i].className.indexOf(" ") >= 0)
		{
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++)
			{
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley()
{
  var postBodyClass = (postBodyClass) ? postBodyClass : 'post-body';
  var d = document.getElementsByClassName(postBodyClass);
  for(var i=0;i<d.length;i++)
	{
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\)/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon0.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-S/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon1.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-P/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon2.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\[/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon3.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-D/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon4.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\}\:\-\]/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon5.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/x\*/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon6.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\;\-D/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon7.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\|/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon8.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\}/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon9.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\*\)/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon10.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\:\-\(/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon11.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\;\-\)/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon12.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/XD/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon13.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
    }

	var d = document.getElementsByClassName('comment-body');
	for(var i=0;i<d.length;i++)
	{
		d[i].innerHTML = d[i].innerHTML.replace(/\:\-\)/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon0.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-S/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon1.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-P/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon2.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\[/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon3.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-D/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon4.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\}\:\-\]/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon5.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/x\*/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon6.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\;\-D/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon7.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\|/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon8.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\}/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon9.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\*\)/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon10.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\:\-\(/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon11.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/\;\-\)/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon12.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
		d[i].innerHTML = d[i].innerHTML.replace(/XD/gi, ' <img src="http://i754.photobucket.com/albums/xx182/zavaletaster/emoticon13.gif" style="border:0; margin:0; padding:0;" id="new" /> ');
    }
}

function addLoadEvent(func) 
{
  var oldonload = window.onload;
  if (typeof window.onload != 'function') 
  {
    window.onload = func;
  } 
  else 
  {
    window.onload = function() 
	{
      oldonload();
      func();
    }
  }
}

addLoadEvent(addSmiley);
//]]>
</script>
<!-- (Fin Script Emoticones) --> 