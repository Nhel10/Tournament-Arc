package com.amplifyframework.datastore.generated.model;

import com.amplifyframework.core.model.temporal.Temporal;

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

/** This is an auto generated class representing the TournamentBracket type in your schema. */
@SuppressWarnings("all")
@ModelConfig(pluralName = "TournamentBrackets", authRules = {
  @AuthRule(allow = AuthStrategy.PUBLIC, operations = { ModelOperation.CREATE, ModelOperation.UPDATE, ModelOperation.DELETE, ModelOperation.READ })
})
@Index(name = "byTournamentArc", fields = {"tournamentarcID"})
public final class TournamentBracket implements Model {
  public static final QueryField ID = field("TournamentBracket", "id");
  public static final QueryField TOURNAMENTARC_ID = field("TournamentBracket", "tournamentarcID");
  public static final QueryField BRACKET_TYPE = field("TournamentBracket", "bracketType");
  public static final QueryField START_DATE = field("TournamentBracket", "startDate");
  public static final QueryField END_DAT = field("TournamentBracket", "endDat");
  private final @ModelField(targetType="ID", isRequired = true) String id;
  private final @ModelField(targetType="ID") String tournamentarcID;
  private final @ModelField(targetType="String") String bracketType;
  private final @ModelField(targetType="AWSDateTime") Temporal.DateTime startDate;
  private final @ModelField(targetType="AWSDateTime") Temporal.DateTime endDat;
  public String getId() {
      return id;
  }
  
  public String getTournamentarcId() {
      return tournamentarcID;
  }
  
  public String getBracketType() {
      return bracketType;
  }
  
  public Temporal.DateTime getStartDate() {
      return startDate;
  }
  
  public Temporal.DateTime getEndDat() {
      return endDat;
  }
  
  private TournamentBracket(String id, String tournamentarcID, String bracketType, Temporal.DateTime startDate, Temporal.DateTime endDat) {
    this.id = id;
    this.tournamentarcID = tournamentarcID;
    this.bracketType = bracketType;
    this.startDate = startDate;
    this.endDat = endDat;
  }
  
  @Override
   public boolean equals(Object obj) {
      if (this == obj) {
        return true;
      } else if(obj == null || getClass() != obj.getClass()) {
        return false;
      } else {
      TournamentBracket tournamentBracket = (TournamentBracket) obj;
      return ObjectsCompat.equals(getId(), tournamentBracket.getId()) &&
              ObjectsCompat.equals(getTournamentarcId(), tournamentBracket.getTournamentarcId()) &&
              ObjectsCompat.equals(getBracketType(), tournamentBracket.getBracketType()) &&
              ObjectsCompat.equals(getStartDate(), tournamentBracket.getStartDate()) &&
              ObjectsCompat.equals(getEndDat(), tournamentBracket.getEndDat());
      }
  }
  
  @Override
   public int hashCode() {
    return new StringBuilder()
      .append(getId())
      .append(getTournamentarcId())
      .append(getBracketType())
      .append(getStartDate())
      .append(getEndDat())
      .toString()
      .hashCode();
  }
  
  @Override
   public String toString() {
    return new StringBuilder()
      .append("TournamentBracket {")
      .append("id=" + String.valueOf(getId()) + ", ")
      .append("tournamentarcID=" + String.valueOf(getTournamentarcId()) + ", ")
      .append("bracketType=" + String.valueOf(getBracketType()) + ", ")
      .append("startDate=" + String.valueOf(getStartDate()) + ", ")
      .append("endDat=" + String.valueOf(getEndDat()))
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
  public static TournamentBracket justId(String id) {
    try {
      UUID.fromString(id); // Check that ID is in the UUID format - if not an exception is thrown
    } catch (Exception exception) {
      throw new IllegalArgumentException(
              "Model IDs must be unique in the format of UUID. This method is for creating instances " +
              "of an existing object with only its ID field for sending as a mutation parameter. When " +
              "creating a new object, use the standard builder method and leave the ID field blank."
      );
    }
    return new TournamentBracket(
      id,
      null,
      null,
      null,
      null
    );
  }
  
  public CopyOfBuilder copyOfBuilder() {
    return new CopyOfBuilder(id,
      tournamentarcID,
      bracketType,
      startDate,
      endDat);
  }
  public interface BuildStep {
    TournamentBracket build();
    BuildStep id(String id) throws IllegalArgumentException;
    BuildStep tournamentarcId(String tournamentarcId);
    BuildStep bracketType(String bracketType);
    BuildStep startDate(Temporal.DateTime startDate);
    BuildStep endDat(Temporal.DateTime endDat);
  }
  

  public static class Builder implements BuildStep {
    private String id;
    private String tournamentarcID;
    private String bracketType;
    private Temporal.DateTime startDate;
    private Temporal.DateTime endDat;
    @Override
     public TournamentBracket build() {
        String id = this.id != null ? this.id : UUID.randomUUID().toString();
        
        return new TournamentBracket(
          id,
          tournamentarcID,
          bracketType,
          startDate,
          endDat);
    }
    
    @Override
     public BuildStep tournamentarcId(String tournamentarcId) {
        this.tournamentarcID = tournamentarcId;
        return this;
    }
    
    @Override
     public BuildStep bracketType(String bracketType) {
        this.bracketType = bracketType;
        return this;
    }
    
    @Override
     public BuildStep startDate(Temporal.DateTime startDate) {
        this.startDate = startDate;
        return this;
    }
    
    @Override
     public BuildStep endDat(Temporal.DateTime endDat) {
        this.endDat = endDat;
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
    private CopyOfBuilder(String id, String tournamentarcId, String bracketType, Temporal.DateTime startDate, Temporal.DateTime endDat) {
      super.id(id);
      super.tournamentarcId(tournamentarcId)
        .bracketType(bracketType)
        .startDate(startDate)
        .endDat(endDat);
    }
    
    @Override
     public CopyOfBuilder tournamentarcId(String tournamentarcId) {
      return (CopyOfBuilder) super.tournamentarcId(tournamentarcId);
    }
    
    @Override
     public CopyOfBuilder bracketType(String bracketType) {
      return (CopyOfBuilder) super.bracketType(bracketType);
    }
    
    @Override
     public CopyOfBuilder startDate(Temporal.DateTime startDate) {
      return (CopyOfBuilder) super.startDate(startDate);
    }
    
    @Override
     public CopyOfBuilder endDat(Temporal.DateTime endDat) {
      return (CopyOfBuilder) super.endDat(endDat);
    }
  }
  
}
