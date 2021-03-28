package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.annotations.HasMany;

import java.util.List;
import java.util.UUID;
import java.util.Objects;

import androidx.core.util.ObjectsCompat;

import com.amplifyframework.core.model.AuthStrategy;
import com.amplifyframework.core.model.Model;
import com.amplifyframework.core.model.ModelOperation;
import com.amplifyframework.core.model.annotations.AuthRule;
import com.amplifyframework.core.model.annotations.Index;
import com.amplifyframework.core.model.annotations.ModelConfig;
import com.amplifyframework.core.model.annotations.ModelField;
import com.amplifyframework.core.model.query.predicate.QueryField;

import static com.amplifyframework.core.model.query.predicate.QueryField.field;

/** This is an auto generated class representing the RegisteredUsers type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "RegisteredUsers", authRules = {
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ })
})
public final class RegisteredUsers implements Model {
  public static final QueryField ID = field("RegisteredUsers", "id");
  public static final QueryField GAMER_TAG = field("RegisteredUsers", "gamerTag");
  public static final QueryField NAME = field("RegisteredUsers", "name");
  public static final QueryField LOCATION = field("RegisteredUsers", "location");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="String") String gamerTag;
  private final @ModelField(targetType="String") String name;
  private final @ModelField(targetType="String") String location;
  private final @ModelField(targetType="TournamentBracket") @HasMany(associatedWith = "registeredusersID", type = TournamentBracket.class) List<TournamentBracket> TournamentBrackets = null;
  public String getId() {
      return id;
  }
  
  public String getGamerTag() {
      return gamerTag;
  }
  
  public String getName() {
      return name;
  }
  
  public String getLocation() {
      return location;
  }
  
  public List<TournamentBracket> getTournamentBrackets() {
      return TournamentBrackets;
  }
  
  private RegisteredUsers(String id, String gamerTag, String name, String location) {
    this.id = id;
    this.gamerTag = gamerTag;
    this.name = name;
    this.location = location;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      RegisteredUsers registeredUsers = (RegisteredUsers) obj;
      return ObjectsCompat.equals(getId(), registeredUsers.getId()) &&
              ObjectsCompat.equals(getGamerTag(), registeredUsers.getGamerTag()) &&
              ObjectsCompat.equals(getName(), registeredUsers.getName()) &&
              ObjectsCompat.equals(getLocation(), registeredUsers.getLocation());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getGamerTag())
      .append(getName())
      .append(getLocation())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("RegisteredUsers {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("gamerTag=" + String.valueOf(getGamerTag()) + ", ")
      .append("name=" + String.valueOf(getName()) + ", ")
      .append("location=" + String.valueOf(getLocation()))
      .append("}")
      .toString();
  }
  
  public static BuildStep builder() {
      return new Builder();
  }
  
  /** 
   * WARNING: This method should not be used to build an instance of this object for a CREATE mutation.
   * This is a convenience method to return an instance of the object with only its ID populated
   * to be used in the context of a parameter in a delete mutation or referencing a foreign key
   * in a relationship.
   * @param id the id of the existing item this instance will represent
   * @return an instance of this model with only ID populated
   * @throws IllegalArgumentException Checks that ID is in the proper format
   */
  public static RegisteredUsers justId(String id) {
    try {
      UUID.fromString(id); // Check that ID is in the UUID format - if not an exception is thrown
    } catch (Exception exception) {
      throw new IllegalArgumentException(
              "Model IDs must be unique in the format of UUID. This method is for creating instances " +
              "of an existing object with only its ID field for sending as a mutation parameter. When " +
              "creating a new object, use the standard builder method and leave the ID field blank."
      );
    }
    return new RegisteredUsers(
      id,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      gamerTag,
      name,
      location);
  }
  public interface BuildStep {
    RegisteredUsers build();
    BuildStep id(String id) throws IllegalArgumentException;
    BuildStep gamerTag(String gamerTag);
    BuildStep name(String name);
    BuildStep location(String location);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String gamerTag;
    private String name;
    private String location;
    @Override
     public RegisteredUsers build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new RegisteredUsers(
          id,
          gamerTag,
          name,
          location);
    }
    
    @Override
     public BuildStep gamerTag(String gamerTag) {
        this.gamerTag = gamerTag;
        return this;
    }
    
    @Override
     public BuildStep name(String name) {
        this.name = name;
        return this;
    }
    
    @Override
     public BuildStep location(String location) {
        this.location = location;
        return this;
    }
    
    /** 
     * WARNING: Do not set ID when creating a new object. Leave this blank and one will be auto generated for you.
     * This should only be set when referring to an already existing object.
     * @param id id
     * @return Current Builder instance, for fluent method chaining
     * @throws IllegalArgumentException Checks that ID is in the proper format
     */
    public BuildStep id(String id) throws IllegalArgumentException {
        this.id = id;
        
        try {
            UUID.fromString(id); // Check that ID is in the UUID format - if not an exception is thrown
        } catch (Exception exception) {
          throw new IllegalArgumentException("Model IDs must be unique in the format of UUID.",
                    exception);
        }
        
        return this;
    }
  }
  

  public final class CopyOfBuilder extends Builder {
    private CopyOfBuilder(String id, String gamerTag, String name, String location) {
      super.id(id);
      super.gamerTag(gamerTag)
        .name(name)
        .location(location);
    }
    
    @Override
     public CopyOfBuilder gamerTag(String gamerTag) {
      return (CopyOfBuilder) super.gamerTag(gamerTag);
    }
    
    @Override
     public CopyOfBuilder name(String name) {
      return (CopyOfBuilder) super.name(name);
    }
    
    @Override
     public CopyOfBuilder location(String location) {
      return (CopyOfBuilder) super.location(location);
    }
  }
  
}
