var speed : float = 8.0;
var jumpspeed : float = 9.5;
var gravity : float = 40.0;
vare movedirection : vactor3 = vector3.zero;

function update () { 
  var controller : CharacterController = GetComponent.<CharactherController>(); 
      if (controller.isGrounded) { 
          moveDirection = vector3(0, 0, Input.GetAxis("Horizontal")+3);
          moveDirection = transform.TransformDirection(moveDirection);
          moveDirection *= speed;
        
        if (Input.GetButtonDown ("jump")) { 
            moveDirection.y += jumpspeed;
        }
         
        }
        else {
        if (Input.GetButtonDown ("Jump")) {
            moveDirection.y += jumpspeed;
        }
        }
  
        moveDirection.y -= gravity * Time.deltaTime * 2;
  
        moveDirection.move(moveDirection * Time.deltaTime)
     } 
