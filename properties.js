var properties = (function() {
    var CANVAS = {
        size : {
            width: 600,
            height: 400
        },
        id: "running-zone"
    };

    var PLAYER_CONTAINER = {},
        PLAYER = {};

    /**
     * player container properties
     */
    PLAYER_CONTAINER.player = {
        id: "player-container"
    };
    PLAYER_CONTAINER.head = {
        id: "head-container",
        transform: "translate(70, 320)"
    };
    PLAYER_CONTAINER.body = {
        id: "body-container",
        transform: "translate(70, 334)"
    };
    PLAYER_CONTAINER.arms = {
        id: "arms-container",
        transform: "translate(70, 334)"
    };
    PLAYER_CONTAINER.legs = {
        id: "legs-container",
        transform: "translate(70, 360)"
    };

    /**
     * player parts properties
     */
    PLAYER.color = "#a66bbe";
    PLAYER.fill = "none";
    PLAYER.width = 7;
    PLAYER.lineCap = "round";

    PLAYER.head = {
        id: "head",
        r: 15
    };
    PLAYER.body = {
        id: "body",
        d: [
            {x: 0, y: 0},
            {x: 0, y: 13},
            {x: 0, y: 26}
        ]
    };
    PLAYER.arms = {
        left: {
            id: "leftArm",
            d: [
                {x: 0, y: 0},
                {x: -3, y: 15},
                {x: -2, y: 30}
            ]
        },
        right: {
            id: "rightArm",
            d: [
                {x: 0, y: 0},
                {x: 0, y: 15},
                {x: 2, y: 30}
            ]
        }
    };
    PLAYER.legs = {
        left: {
            id: "leftLeg",
            d: [
                {x: 0, y: 0},
                {x: -2, y: 15},
                {x: -6, y: 30}
            ]
        },
        right: {
            id: "rightLeg",
            d: [
                {x: 0, y: 0},
                {x: 2, y: 15},
                {x: 2, y: 30}
            ]
        }
    };

    return {
        getCanvasSize: function() {
            return CANVAS.size;
        },
        getCanvasId: function() {
            return CANVAS.id;
        },
        getPlayerContainer: function() {
            return PLAYER_CONTAINER.player;
        },
        getHeadContainer: function() {
            return PLAYER_CONTAINER.head;
        },
        getBodyContainer: function() {
            return PLAYER_CONTAINER.body;
        },
        getArmsContainer: function() {
            return PLAYER_CONTAINER.arms;
        },
        getLegsContainer: function() {
            return PLAYER_CONTAINER.legs;
        },
        getHead: function() {
            return PLAYER.head;
        },
        getBody: function() {
            return PLAYER.body;
        },
        getArms: function() {
            return PLAYER.arms;
        },
        getLegs: function() {
            return PLAYER.legs;
        },
        getWidth: function() {
            return PLAYER.width;
        },
        getFill: function() {
            return PLAYER.fill;
        },
        getColor: function() {
            return PLAYER.color;
        },
        getCap: function() {
            return PLAYER.lineCap;
        }
    };
})();