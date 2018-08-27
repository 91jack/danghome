// 上传图片
			
			
			var str = ''
			 $("#file").change(function (e) {
                var file = e.target.files[0] || e.dataTransfer.files[0];
                console.log(file)
                if (file) {
                	 console.log(file)
			      var reader = new FileReader();
			      reader.onload = function(evt) {
			      	console.log(8888)
			        str = '<div class="img-item"><img src="' + evt.target.result + '" /><span class="icon-del" onclick="del(this)"></span></div>';
			      	$('.upload-imgwrap').append(str);
			      	
			      
			      	if($('.img-item').length>2){
				    	$('#uploadBtn').hide();
				    }else{
				    	$('#uploadBtn').show();
				    }
				    
			      }
			     
			      reader.readAsDataURL(file);
			    } 
            });

			function del(obj){
				console.log(111111111)
				$(obj).parent().remove();
				if($('.img-item').length>2){
			    	$('#uploadBtn').hide();
			    }else{
			    	$('#uploadBtn').show();
			    }
			}