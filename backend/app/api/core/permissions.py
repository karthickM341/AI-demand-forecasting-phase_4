from fastapi import HTTPException, status


class PermissionChecker:

    def __init__(self, allowed_roles: list):
        self.allowed_roles = allowed_roles

    def __call__(self, current_user):

        if current_user.role not in self.allowed_roles:

            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Permission denied"
            )

        return current_user


# Role Permissions

AdminOnly = PermissionChecker(
    ["admin"]
)

AdminAnalyst = PermissionChecker(
    ["admin", "analyst"]
)

AllUsers = PermissionChecker(
    ["admin", "analyst", "viewer"]
)