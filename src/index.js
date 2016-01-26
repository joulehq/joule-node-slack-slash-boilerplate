console.log('Loading function');
/**
 * Provide an event that contains the following keys:
 *
 *   - operation: one of the operations in the switch statement below
 *   - tableName: required for operations that interact with DynamoDB
 *   - payload: a parameter to pass to the operation being performed
 */
exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    var token = event.token;
    var command = event.command;
    var text = event.text;
    if(token !== process.env.token) {
        context.succeed("That's not a valid token, sir.");
    }
    
    //context.succeed(text.split('').reverse().join(''));
    context.succeed('why');
};
